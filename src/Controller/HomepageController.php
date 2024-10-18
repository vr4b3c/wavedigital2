<?php

declare(strict_types=1);

namespace App\Controller;

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
    )
    {
    }

    #[Route('/', name: 'homepage')]
    public function index(Request $request): Response
    {
        return $this->render('homepage/index.html.twig');
    }

    #[Route('/contact', name: 'homepage_contact')]
    public function contact(): Response
    {
        return $this->render('homepage/contact.html.twig');
    }
}
