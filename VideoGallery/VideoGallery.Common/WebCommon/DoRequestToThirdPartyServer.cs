using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace VideoGallery.Common.WebCommon
{
    /// <summary>
    /// Вспомогательный класс для отправки запросов на сторонний сервер
    /// </summary>
    public static class DoRequestToThirdPartyServer
    {
        /// <summary>
        ///  Отправка запроса, используя строку запроса (полностью заполненную клиентом)
        /// </summary>
        /// <param name="requestString">строка запроса</param>
        /// <returns>Контент от стороннего сервера</returns>
        public static async Task <string> GetResponseByFullQueryStringAsync (string requestString)
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
