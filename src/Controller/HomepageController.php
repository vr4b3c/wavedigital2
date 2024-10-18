<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\UserRepository;
use App\Model\MailService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('')]
class HomepageController extends AbstractController
{
    public function __construct(
        private MailService $mailService,
        private UserRepository $userRepository, // Přidáno UserRepository
    )
    {
    }


    #[Route('/', name: 'app_index')]
    public function index(Request $request): Response
    {
        $users = $this->userRepository->findAll();

        // Předání uživatelů do šablony
        return $this->render('homepage/index.html.twig', [
            'users' => $users,
        ]);
    }

    #[Route('/prihlaseni', name: 'app_login')]
    public function login(): Response
    {
        return $this->render('security/login.html.twig');
    }

    #[Route('/registrace', name: 'app_registration')]
    public function registration(): Response
    {
        return $this->render('security/registration.html.twig');
    }

    #[Route('/odhlaseni', name: 'app_logout')]
    public function logout(): Response
    {
        return $this->render('homepage/index.html.twig');
    }    
}
