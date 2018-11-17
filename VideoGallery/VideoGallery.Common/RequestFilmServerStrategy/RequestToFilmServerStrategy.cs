using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using VideoGallery.Abstract;

namespace VideoGallery.RequestToFilmServerModel.RequestFilmServerStrategy
{
    /// <summary>
    /// Вспомогательный класс для стратегии отправки запросов на сторонний сервер
    /// </summary>
    public  class RequestToFilmServerStrategy : IRequestToFilmDataServerStrategy
    {

        /// <summary>
        ///  Отправка запроса, используя строку запроса (полностью заполненную клиентом)
        /// </summary>
        /// <param name="requestString">строка запроса</param>
        /// <returns>Контент от стороннего сервера</returns>
        public  async Task <string> GetResponseByFullQueryStringAsync(string requestString)
        {
            var request = (HttpWebRequest)WebRequest.Create(requestString);

            request.Method = "GET";
            Task<WebResponse> taskForGetResponse = request.GetResponseAsync();
            var response = (HttpWebResponse)await taskForGetResponse;
            using (Stream stream = response.GetResponseStream())
            {
                using (StreamReader reader = new StreamReader(stream))
                {
                    return reader.ReadToEnd();
                }
            }
        }
    }
}
