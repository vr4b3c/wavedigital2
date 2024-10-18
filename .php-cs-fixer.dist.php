<?php

$finder = (new PhpCsFixer\Finder())
    ->in(__DIR__)
    ->exclude('var')
;

return (new PhpCsFixer\Config())
    ->setRules([
        '@Symfony' => true,
        'phpdoc_to_comment' => false,
        'yoda_style' => [
            'equal' => false,
            'identical' => false,
            'less_and_greater' => false,
        ],
        'increment_style' => ['style' => 'post'],
        'concat_space' => ['spacing' => 'one'],
    ])
    ->setFinder($finder)
    ;
