<?php

class Router
{
	private static $routes = [];

  static function route($pattern, $callback)
  {
		$pattern = '/^' . str_replace('/', '\/', $pattern) . '$/';
		self::$routes[$pattern] = $callback;
	}

	static function execute($url = null)
  {
    if (!isset($url))
      $url = $_SERVER['REQUEST_URI'];

		foreach (self::$routes as $pattern => $callback)
			if (preg_match($pattern, $url, $params))
      {
				array_shift($params);
				return call_user_func_array($callback, array_values($params));
			}
	}
}
