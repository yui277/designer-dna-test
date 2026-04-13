<?php
/**
 * 设计师人格基因测试 - AI解读API
 */
require_once __DIR__ . '/common.php';
$apiKey = getSecret('DEEPSEEK_API_KEY');
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: POST, OPTIONS');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['ok'=>false,'error'=>'Method not allowed']); exit; }

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'Invalid request']); exit; }

$answers = $input['answers'] ?? [];
$top = $input['top'] ?? [];
$field = $input['field'] ?? '设计';

$sysPrompt = '你是一位专业的设计人格分析师。根据用户的开放题回答，生成一段深刻、有趣、个性化的设计人格洞察。要求：1.语言专业但不失幽默 2.结合用户回答的具体内容 3.聚焦于用户开放题回答中体现的独特设计价值观和思维模式 4.给出具体的、可操作的设计发展建议，而非泛泛的描述 5.使用HTML标签格式化（h3,h4,p,strong,ul,li等）6.字数200-400字 7.不要重复结果页面上方已展示的设计师名字、匹配百分比、特征关键词和领域名称 8.每个观点只阐述一次，避免任何形式的信息重复 9.重点挖掘用户回答中隐含的跨领域思维模式和未被表面关键词覆盖的深层洞察。';

$userPrompt = "【重要提示】以下设计师匹配结果和特征关键词已在页面上方展示给用户，请在你的分析中避免重复这些内容，而是提供补充性的深度洞察：\n";
foreach ($top as $i => $d) {
    $userPrompt .= "- 已展示：{$d['n']} {$d['p']}%，特征标签：" . implode('、', $d['t'] ?? []) . "\n";
}
$userPrompt .= "- 已展示领域：{$field}\n";
$userPrompt .= "\n请基于以下用户开放题回答，提供与上述已展示信息不重复的独特洞察：\n";
$labels = ['设计觉醒瞬间', '设计偶像', '设计使命'];
$ansKeys = array_keys($answers);
foreach ($answers as $k => $v) {
    $idx = array_search($k, $ansKeys);
    $lbl = ($idx !== false && isset($labels[$idx])) ? $labels[$idx] : '回答';
    $userPrompt .= "- {$lbl}: " . mb_substr($v, 0, 100) . "\n";
}

$ch = curl_init('https://api.deepseek.com/chat/completions');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode([
        'model' => 'deepseek-chat',
        'messages' => [
            ['role' => 'system', 'content' => $sysPrompt],
            ['role' => 'user', 'content' => $userPrompt]
        ],
        'max_tokens' => 1024,
        'temperature' => 0.7
    ]),
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $apiKey
    ],
    CURLOPT_TIMEOUT => 30,
    CURLOPT_SSL_VERIFYPEER => false
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(['ok' => true, 'data' => json_decode($response, true)]);
} else {
    echo json_encode(['ok' => false, 'error' => 'API error', 'status' => $httpCode]);
}
