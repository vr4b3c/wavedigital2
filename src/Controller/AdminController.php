<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin')]
class AdminController extends AbstractController
{
    #[Route('/', name: 'admin_index', methods: ['GET', 'POST'])]
    public function index(Request $request): Response
    {
        return $this->render('admin/article/index.html.twig');
    }

    #[Route('/new', name: 'admin_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        return $this->render('admin/article/new.html.twig');
    }
}
