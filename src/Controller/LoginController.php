<?php
// src/Controller/LoginController.php

namespace App\Controller;

use App\Form\LoginForm;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class LoginController extends AbstractController
{
/*
    #[Route('/prihlaseni', name: 'app_login')]
    public function index(AuthenticationUtils $authenticationUtils): Response
    {
         // get the login error if there is one
         $error = $authenticationUtils->getLastAuthenticationError();

         // last username entered by the user
         $lastUsername = $authenticationUtils->getLastUsername();
         $form = $this->createForm(LoginForm::class);

        return $this->render('security/login.html.twig', [
             'form' => $form->createView(),
             'controller_name' => 'LoginController',
             'last_username' => $lastUsername,
             'error'         => $error,
        ]);
    }   
     */
    
    
    #[Route('/prihlaseni', name: 'app_login')]
    public function index(Request $request, AuthenticationUtils $authenticationUtils): Response
    {
        // Získání chyby při přihlášení, pokud existuje
        $error = $authenticationUtils->getLastAuthenticationError();

        // Poslední zadané uživatelské jméno
        $lastUsername = $authenticationUtils->getLastUsername();


        // Vytvoření formuláře
        $form = $this->createForm(LoginForm::class);

        // Zpracování požadavku
        $form->handleRequest($request);

        // Zpracování formuláře
        if ($form->isSubmitted() && $form->isValid()) {
            // Flash zpráva pro úspěšné přihlášení
            $this->addFlash('success', 'Přihlášení proběhlo úspěšně!');
         //   return $this->redirectToRoute('app_index'); // nebo jakákoliv jiná trasa
        }

        return $this->render('security/login.html.twig', [
            'form' => $form->createView(),
            'controller_name' => 'LoginController',      
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    #[Route('/odhlasit', name: 'app_logout')]
    public function logout(): void
    {

    }
}
