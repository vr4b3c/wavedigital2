<?php

declare(strict_types=1);

namespace App\Entity;

use App\Entity\Enum\UserRole;
use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\IdGenerator\UuidGenerator;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    /**
     * @ORM\Id
     *
     * @ORM\Column(type="uuid", unique=true)
     *
     * @ORM\GeneratedValue(strategy="CUSTOM")
     *
     * @ORM\CustomIdGenerator(class=UuidGenerator::class)
     */
    public string $id;

    /**
     * @ORM\Column(type="string", length=100, unique=true)
     */
    public string $username;

    /**
     * @ORM\Column(type="datetime")
     */
    public \DateTime $createdAt;

    /**
     * @var string The hashed password
     *
     * @ORM\Column(type="string")
     */
    private string $password;

    /**
     * @ORM\Column(type="string", length=100, enumType="App\Entity\Enum\UserRole")
     */
    public UserRole $role;

    public function __construct()
    {
        $this->role = UserRole::USER;
        $this->createdAt = new \DateTime();
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return $this->username;
    }

    public function setUsername(string $username): void
    {
        $this->username = $username;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * @see UserInterface
     */
    public function getRole(): string
    {
        /** @var string */
        return UserRole::USER->value;
    }

    /**
     * @return $this
     */
    public function setRole(string $role): self
    {
        $this->role = UserRole::from($role);

        return $this;
    }

    public function getRoles(): array
    {
        return [$this->role->value];
    }
}
