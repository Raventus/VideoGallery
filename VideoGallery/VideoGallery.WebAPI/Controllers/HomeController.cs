using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VideoGallery.WebAPI.Controllers
{
    public class HomeController : Controller
    {
        /// <summary>
        /// Метод отображения стартовой страницы приложения
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            ViewBag.Title = "Видео галерея";
            return View();
        }

        /// <summary>
        /// Метод для отправки формы с поисковым запросом
        /// </summary>
        /// <param name="FilmName">строка запроса</param>
        /// <returns></returns>
        [HttpPost]
        public RedirectToRouteResult SubmitQuery (string FilmName)
        {
            return RedirectToRoute(
                "videoGalleryApiRoute"
                , new
                {
                    controller = "VideoGalleryApi",
                    filmName = FilmName,
                    HttpRoute = true
                });
        }



        /// <summary>
        /// Метод для отправки формы с поисковым запросом
        /// </summary>
        /// <param name="FilmName">строка запроса</param>
        /// <returns></returns>
        [HttpPost]
        public RedirectToRouteResult SubmitDetailQuery(string _ID)
        {
            return RedirectToRoute(
                "videoGalleryApiDetailRoute"
                , new
                {
                    controller = "VideoGalleryApi",
                    ID = _ID,
                    HttpRoute = true
                });
        }
    }
}
