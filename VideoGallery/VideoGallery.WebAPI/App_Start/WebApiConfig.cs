using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace VideoGallery.WebAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Конфигурация и службы веб-API

            // Маршруты веб-API
            config.MapHttpAttributeRoutes();

            // маршрут для детального представления фильма
            config.Routes.MapHttpRoute(
               name: "videoGalleryApiDetailRoute",
               routeTemplate: "api/{controller}/{ID}"
           );
            // маршрут для поиска коллекции фильмов
            config.Routes.MapHttpRoute(
                name: "videoGalleryApiRoute",
                routeTemplate: "api/{controller}/{filmName}",
                defaults: new { filmName = RouteParameter.Optional }
            );
            config.Formatters.Remove(config.Formatters.XmlFormatter);

            config.Formatters.Remove(config.Formatters.XmlFormatter);
        }
    }
}
