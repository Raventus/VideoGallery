using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VideoGallery.Common.Abstract;
using VideoGallery.Common.WebCommon;
using VideoGallery.PlatformModel.Abstract;

namespace VideoGallery.Common.VideoSearchServers
{
   /// <summary>
   /// Класс для получения данных о фильмах, с использованием платформ IMDB
   /// </summary>
    public class FilmSearchServer_for_IMDB_Platform : IFilmSearchServer
    {
        private IFilmPlatform _filmPlatform;
        private IRequestToFilmDataServerStrategy _requestToFilmServerStrategy; 
        public FilmSearchServer_for_IMDB_Platform(IFilmPlatform filmPlatform, IRequestToFilmDataServerStrategy requestToFilmServerStrategy)
        {
            this._filmPlatform = filmPlatform;
            this._requestToFilmServerStrategy = requestToFilmServerStrategy;
        }

        public Task<string> GetListOfFilmsByFilmNameSearchQuery(string filmName)
        {
            IQueryModel QueryToFilmDataServer = _filmPlatform.CreateQueryResponseByFilmName(filmName);
            string FullUrl = QueryToFilmDataServer.FullQueryString;
            return _requestToFilmServerStrategy.GetResponseByFullQueryStringAsync(FullUrl);
        }
    }
}
