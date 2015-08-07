<?php

namespace App\Model;

/**
* Tweet
*/
class Tweet
{
    public function getJson()
    {
        $this->ago = "5 minutes ago";

        $this->retweets = rand(0, 300);

        return json_encode($this);
    }
}
