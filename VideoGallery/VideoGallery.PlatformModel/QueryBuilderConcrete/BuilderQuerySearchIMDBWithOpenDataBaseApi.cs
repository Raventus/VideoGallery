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
    public class BuilderQuerySearchIMDBWithOpenDataBaseApi : IBuilder_FilmSearchQuery
    {

        IQueryModel QueryObject = new IMDB_QueryModel_WithOpenDataBaseApi();
        NameValueCollection queryStringOfRequest;
        Dictionary<string, string> QueryParameterDictionary;

        /// <summary>
        /// Ключи для словаря параметров строки запроса
        /// </summary>
        private const string _filmName = "FilmName";
        private const string _yearOfCreation = "YearOfCreation";
        private const string _keyAuth = "KeyAuthTail";
        private const string _id = "IMDB_ID";
        private const string _page = "page";

       
        private const string HostName = "http://www.omdbapi.com/";

        // персональный ключ для поиска
        private const string _authKey = "dc74c032";

        /// <summary>
        /// Конструктор строителя объекта запроса
        /// </summary>
        public BuilderQuerySearchIMDBWithOpenDataBaseApi()
        {
           
            queryStringOfRequest = System.Web.HttpUtility.ParseQueryString(string.Empty);
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
                QueryParameterDictionary[_page] = "page";
                QueryParameterDictionary[_keyAuth] = "apikey";
                QueryParameterDictionary[_id] = "i";
            }
            else
            {
                throw new ArgumentNullException();
            }
        }


        public void ClearQueryObject ()
        {
            if (!string.IsNullOrEmpty(QueryObject.FilmName))
            {
                QueryObject.FilmName = null;
            }
            if (!string.IsNullOrEmpty(QueryObject.YearOfCreation))
            {
                QueryObject.YearOfCreation = null;
            }
            if (!string.IsNullOrEmpty(QueryObject.ID))
            {
                QueryObject.ID = null;
            }
        }
        public void BuildNameOfFilm(string nameOfFilm)
        {

            queryStringOfRequest[QueryParameterDictionary[_filmName]] = nameOfFilm;
  
        }

        public void BuildYearOfFoundation(string yearOfFilm)
        {
            queryStringOfRequest[QueryParameterDictionary[_yearOfCreation]] = yearOfFilm;
        }

        public void BuildPageNumber(string page)
        {
            queryStringOfRequest[QueryParameterDictionary[_page]] = page;
        }

        public void BuildID(string ID)
        {
            queryStringOfRequest[QueryParameterDictionary[_id]] = ID;
        }

        public IQueryModel GetQueryObject()
        {
            queryStringOfRequest[QueryParameterDictionary[_keyAuth]] = _authKey;
            UriBuilder FullQueryString = new UriBuilder (HostName);
            FullQueryString.Query = queryStringOfRequest.ToString();
            QueryObject.FullQueryString = FullQueryString.ToString();
            return QueryObject;
        }

    }
}
