<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ThemeServiceProvider extends ServiceProvider
{

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $path = env('ACTIVE_THEME')."/";
        $views = [
            resource_path("views/$path"),
            resource_path("views/backend")
        ];


        $this->loadViewsFrom($views, 'theme');
    }
}
