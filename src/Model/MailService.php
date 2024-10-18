<?php

declare(strict_types=1);

namespace App\Model;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;
use Twig\Environment;

class MailService
{
    public function __construct(
        private string $mailSender,
        private MailerInterface $mailer,
        private Environment $twig,
    ) {
    }

    public function sendMail(string $email, string $variable): void
    {
        $htmlBody = $this->twig->render('mail.html.twig', [
            'variable' => $variable,
        ]);

        $email = (new Email())
            ->from(new Address($this->mailSender, 'sender'))
            ->to($email)
            ->subject('subject')
            ->html($htmlBody);

        $this->mailer->send($email);
    }
}
