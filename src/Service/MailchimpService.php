<?php

namespace App\Service;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class MailchimpService
{
    private Client $client;
    private string $apiKey;
    private string $listId;

    public function __construct(string $apiKey, string $listId)
    {
        $this->apiKey = $apiKey;
        $this->listId = $listId;

        // Zde nastavíme Guzzle HTTP klienta
        $this->client = new Client([
            'base_uri' => 'https://us9.api.mailchimp.com/3.0/', // nahradit <dc> svým datacentrem (např. us1, us2, atd.)
            'auth' => ['anystring', $this->apiKey], // API klíč je zde jako heslo
        ]);
    }

    public function subscribeUser(string $email): bool
    {
        try {
            $response = $this->client->post("lists/{$this->listId}/members", [
                'json' => [
                    'email_address' => $email,
                    'status' => 'subscribed',
                ],
            ]);
            return $response->getStatusCode() === 200;
        } catch (RequestException $e) {
            // Zde můžeš logovat chyby nebo je jinak zpracovat
            return false;
        }
    }
}
