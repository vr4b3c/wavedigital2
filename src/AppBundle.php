<?php

namespace App;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class AppBundle extends Bundle
{
    public function boot(): void
    {
        date_default_timezone_set('Europe/Prague');
        parent::boot();
    }
}
