using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoGallery.Common.Abstract
{

    /// <summary>
    /// Интерфейс стратегии запроса к серверу данных о фильмах
    /// </summary>
    public interface IRequestToFilmDataServerStrategy
    {
        /// <summary>
        /// Получить ответ от сервера по полностью сформированной строке запроса
        /// </summary>
        /// <param name="FullQueryString">строка запроса</param>
        /// <returns></returns>
        Task<string> GetResponseByFullQueryStringAsync(string FullQueryString);
    }
}
