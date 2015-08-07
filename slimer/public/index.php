<?php

require '../vendor/autoload.php';

$fs = new App\Libraries\FileSystem();
$app = new \Slim\Slim();

$app->config(array(
    'mode' => 'development',
    'templates.path' => './../templates',
    'log.enabled' => true,
));


// Only invoked if mode is "production"
$app->configureMode('production', function () use ($app) {
    $app->config(array(
        'log.enable' => true,
        'debug' => false,
        'log.level' => \Slim\Log::ERROR
    ));
});

// Only invoked if mode is "development"
$app->configureMode('development', function () use ($app) {
    $app->config(array(
        'log.enable' => true,
        'debug' => true,
        'log.level' => \Slim\Log::WARN
    ));
});

$app->get('/', function() {
    echo "Hello world";
});

$app->get('/tweets(/:id)', function($id = null) use ($app, $fs) {

    $app->response->header("Content-Type", "application/json");

    $contents = $fs->readFile("../data/tweets.json");

    if (is_null($id)) {
        echo $contents;
        return;
    }

    $tweets = json_decode($contents);
    $tweet = new App\Model\Tweet();
    $tweet->id = $id;
    $tweet->username = $tweets->$id->username;
    $tweet->content = $tweets->$id->content;

    echo $tweet->getJson();
});

$app->run();
