using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoGallery.Abstract
{
    /// <summary>
    /// Интерфейс для получения данных о фильмах со стороннего сервера
    /// </summary>
    public interface IFilmSearchServer
    {
        Task<string> GetListOfFilmsByFilmNameSearchQuery(string filmName);
    }
}
