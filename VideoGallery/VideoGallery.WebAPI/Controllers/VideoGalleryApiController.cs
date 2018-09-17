using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;
using VideoGallery.PlatformModel.Abstract;
using VideoGallery.PlatformModel.FilmModelConcrete;

namespace VideoGallery.WebAPI.Controllers
{
    public class VideoGalleryApiController : ApiController
    {
        private IPlatform _platform;
        IEnumerable<IFilmModel> ExampleCollection = new List<IFilmModel> { 
                new IMDB_FilmModel { NameOfFilm = "GodFather", YearOfCreation = 1972},
                new IMDB_FilmModel { NameOfFilm = "GodFather 2", YearOfCreation = 1974},
                new IMDB_FilmModel { NameOfFilm = "GodFather 3", YearOfCreation = 1990}
            };
        //public VideoGalleryApiController()
        //{
        //    int a = 0;
        //    a++;
        //}

        public VideoGalleryApiController(IPlatform platform)
        {
            this._platform = platform;
        }

        [System.Web.Http.HttpGet]
        public IEnumerable<IFilmModel> Get()
        {
            JsonResult jsonResult = new JsonResult();
            jsonResult.Data = ExampleCollection;
            return ExampleCollection;
        }


        [System.Web.Http.HttpGet]
        public /*async*/ JsonResult GetVideoGalleryByNameAndYear (string Name, string Year)
        {
            JsonResult jsonResult = new JsonResult();
            jsonResult.Data = ExampleCollection;
            //await 
            return jsonResult;
        }

        [System.Web.Http.HttpPost]
        public /*async*/ JsonResult PostVideoGalleryByNameAndYear(string Name, string Year)
        {
            JsonResult jsonResult = new JsonResult();
            jsonResult.Data = ExampleCollection;
            //await 
            return jsonResult;
        }
    }
}
