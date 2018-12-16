using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoGallery.PlatformModel.Abstract
{
    /// <summary>
    /// Модель запроса, для предоставления данных для поиска на какой-либо платформе
    /// </summary>
    public abstract class IQueryModel
    {
        public string ID { get; set; }
        public string FilmName { get; set; }
        public string YearOfCreation { get; set;}

        public bool IsDetailSearch { get; set; }
        /// <summary>
        /// Полная строка для запроса со стороннего сервера
        /// </summary>
        public string FullQueryString { get; set; }

    }
}
