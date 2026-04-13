<?php
/**
 * 通用函数库
 * 复用自GH Helper Super
 */

/**
 * 获取环境变量（优先级：环境变量 > $_SERVER > $_ENV > secrets.local.php）
 */
function gh_require_env(string $name): string {
    // 1. 尝试环境变量
    $value = getenv($name);
    if ($value !== false) {
        return $value;
    }
    
    if (isset($_SERVER[$name])) {
        return $_SERVER[$name];
    }
    
    if (isset($_ENV[$name])) {
        return $_ENV[$name];
    }
    
    // 2. 尝试从本地配置文件读取
    $secretsFile = __DIR__ . '/secrets.local.php';
    if (file_exists($secretsFile)) {
        $secrets = include $secretsFile;
        if (isset($secrets[$name])) {
            return $secrets[$name];
        }
    }
    
    throw new Exception("Missing required environment variable: {$name}");
}

/**
 * HTTP请求封装
 */
function gh_http_json(
    string $url,
    string $method = 'GET',
    array $headers = [],
    ?array $body = null,
    int $timeout = 30,
    ?callable $progressCallback = null
): array {
    $ch = curl_init();
    
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    
    // 设置请求方法
    if ($method === 'POST') {
        curl_setopt($ch, CURLOPT_POST, true);
        if ($body !== null) {
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));
        }
    }
    
    // 设置请求头
    if (!empty($headers)) {
        $headerArray = [];
        foreach ($headers as $key => $value) {
            $headerArray[] = "{$key}: {$value}";
        }
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headerArray);
    }
    
    // 执行请求
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    
    curl_close($ch);
    
    if ($error) {
        return [
            'status' => 0,
            'error' => $error,
            'body' => null,
            'json' => null
        ];
    }
    
    $json = json_decode($response, true);
    
    return [
        'status' => $httpCode,
        'error' => null,
        'body' => $response,
        'json' => $json
    ];
}
