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
    public class Builder_QuerySearch_IMDB_With_OpenDataBaseApi : IBuilder_QuerySearchFilm
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

       
        private const string HostName = "http://www.omdbapi.com/";

        // персональный ключ для поиска
        private const string _authKey = "dc74c032";

        /// <summary>
        /// Конструктор строителя объекта запроса
        /// </summary>
        public Builder_QuerySearch_IMDB_With_OpenDataBaseApi()
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
                QueryParameterDictionary[_keyAuth] = "apikey";
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
        }
        public void BuildNameOfFilm(string nameOfFilm)
        {

            queryStringOfRequest[QueryParameterDictionary[_filmName]] = nameOfFilm;
        }

        public void BuildYearOfFoundation(string yearOfFilm)
        {
            queryStringOfRequest[QueryParameterDictionary[_yearOfCreation]] = yearOfFilm;
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
