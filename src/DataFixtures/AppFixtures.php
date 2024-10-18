<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Enum\UserRole;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    public function __construct(
        private UserPasswordHasherInterface $encoder,
    ) {
    }

    public function load(ObjectManager $manager): void
    {
        // create first user
        $user = new User();
        $user->setUsername('admin');
        $user->setPassword($this->encoder->hashPassword($user, 'admin'));
        $user->role = UserRole::USER;

        $manager->persist($user);

        $manager->flush();
    }
}
