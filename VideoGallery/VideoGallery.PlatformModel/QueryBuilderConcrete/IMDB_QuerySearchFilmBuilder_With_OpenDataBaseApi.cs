using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VideoGallery.PlatformModel.Abstract;
using VideoGallery.PlatformModel.QueryModelConcrete;

namespace VideoGallery.PlatformModel.QueryBuilderConcrete
{
    /// <summary>
    /// Строитель запроса для платформы IMDB, используя стратегию поиска OpenDataBaseApi 
    /// </summary>
    public class IMDB_QuerySearchFilmBuilder_With_OpenDataBaseApi : IQuerySearchFilmBuilder
    {

        IQueryModel QueryString = new IMDB_QueryModel_WithOpenDataBaseApi();
        NameValueCollection queryString;
        Dictionary<string, string> QueryParameterDictionary;

        /// <summary>
        /// Ключи для словаря параметров строки запроса
        /// </summary>
        private const string _filmName = "FilmName";
        private const string _yearOfCreation = "YearOfCreation";
        private const string _keyAuth = "KeyAuthTail";

       
        private const string HostName = "http://www.omdbapi.com/";

        // персональный ключ для поиска
        private const string _authKey = "dc74c032";

        /// <summary>
        /// Конструктор строителя объекта запроса
        /// </summary>
        public IMDB_QuerySearchFilmBuilder_With_OpenDataBaseApi()
        {
           
            queryString = System.Web.HttpUtility.ParseQueryString(string.Empty);
            QueryParameterDictionary = new Dictionary<string, string>();
            FillQueryParameterDictionary();
        }
        /// <summary>
        /// Заполнение словаря ключей для строки запроса к OpenDataBaseApi
        /// </summary>
        private void FillQueryParameterDictionary()
        {
            if (QueryParameterDictionary != null)
            {
                QueryParameterDictionary[_filmName] = "s";
                QueryParameterDictionary[_yearOfCreation] = "y";
                QueryParameterDictionary[_keyAuth] = "apikey";
            }
            else
            {
                throw new ArgumentNullException();
            }
        }


        public void ClearQueryObject ()
        {
            if (string.IsNullOrEmpty(QueryString.FilmName))
            {
                QueryString.FilmName = null;
            }
            if (string.IsNullOrEmpty(QueryString.YearOfCreation))
            {
                QueryString.YearOfCreation = null;
            }
        }
        public void BuildNameOfFilm(string nameOfFilm)
        {

            queryString[QueryParameterDictionary[_filmName]] = nameOfFilm;
        }

        public void BuildYearOfFoundation(string yearOfFilm)
        {
            queryString[QueryParameterDictionary[_yearOfCreation]] = yearOfFilm;
        }

        public IQueryModel GetQueryObject()
        {
            queryString[QueryParameterDictionary[_keyAuth]] = _authKey;
            UriBuilder FullQueryString = new UriBuilder (HostName);
            FullQueryString.Query = queryString.ToString();
            QueryString.FullQueryString = FullQueryString.ToString();
            return QueryString;
        }
    }
}
