using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;
using VideoGallery.Common.WebCommon;
using VideoGallery.Common.Abstract;
using VideoGallery.PlatformModel.Abstract;
using VideoGallery.PlatformModel.FilmModelConcrete;


namespace VideoGallery.WebAPI.Controllers
{
    public class VideoGalleryApiController : ApiController
    {
        private IFilmSearchServer _searchServer;

        /// <summary>
        /// Тестовая коллекция для отображения (возможно устареет)
        /// </summary>
        IEnumerable<IFilmModel> ExampleCollection = new List<IFilmModel> { 
                new IMDB_FilmModel { NameOfFilm = "GodFather", YearOfCreation = 1972},
                new IMDB_FilmModel { NameOfFilm = "GodFather 2", YearOfCreation = 1974},
                new IMDB_FilmModel { NameOfFilm = "GodFather 3", YearOfCreation = 1990}
            };

        /// <summary>
        /// Конструктор api контроллера по поиску фильмов
        /// </summary>
        /// <param name="platform">Платформа, по которой осуществляется поиск</param>
        public VideoGalleryApiController(IFilmSearchServer searchServer)
        {
            this._searchServer = searchServer;
        }

        /// <summary>
        /// Получение результатов по названию фильма
        /// </summary>
        /// <param name="filmName">Название фильма или его часть</param>
        /// <returns></returns>
        [System.Web.Http.HttpGet]
        public async Task<JsonResult> GetVideoGalleryByFullNameAsync (string filmName = "GodFather")
        {
            if (string.IsNullOrEmpty(filmName))
            {
                throw new ArgumentNullException();
            }
            return  new JsonResult()
                        { Data = await _searchServer.GetListOfFilmsByFilmNameSearchQuery(filmName) };

        }
    }
}
