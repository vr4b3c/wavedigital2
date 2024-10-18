<?php
// src/Security/LoginFormAuthenticator.php

namespace App\Security;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Guard\AbstractGuardAuthenticator;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class LoginFormAuthenticator extends AbstractGuardAuthenticator
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function supports(Request $request): bool
    {
        return $request->attributes->get('_route') === 'login'
            && $request->isMethod('POST');
    }

    public function getCredentials(Request $request)
    {
        return [
            'username' => $request->request->get('username'),
            'password' => $request->request->get('password'),
            'csrf_token' => $request->request->get('csrf_token'),
        ];
    }

    public function verifyCredentials(array $credentials): void
    {
        if (empty($credentials['username']) || empty($credentials['password'])) {
            throw new CustomUserMessageAuthenticationException('Nesprávné uživatelské jméno nebo heslo.');
        }
    }

    public function checkCredentials(array $credentials, UserInterface $user): bool
    {
        return password_verify($credentials['password'], $user->getPassword());
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey): ?Response
    {
        return null; // Defaultně se nic neděje; přesměrování můžete udělat jinak
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        // Zpracování selhání přihlášení
        return new Response($exception->getMessage(), Response::HTTP_FORBIDDEN);
    }

    public function supportsRememberMe(): bool
    {
        return false; // pokud chcete podporu pro zapamatování, nastavte na true
    }
}
