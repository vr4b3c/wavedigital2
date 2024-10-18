<?php
// src/Form/Registration.php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RegistrationForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('username', EmailType::class, [
                'attr' => ['class' => 'form-control', 'placeholder' => 'Tvůj e-mail'],
                'label' => false,
            ])
            ->add('password', PasswordType::class, [
                'attr' => ['class' => 'form-control', 'placeholder' => 'Zadejte své nové heslo'],
                'label' => false,
            ])
    
            ->add('submit', SubmitType::class, [
                'label' => 'Registrovat!',
                'attr' => ['class' => 'btn btn-primary'],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
           
        ]);
    }
}
