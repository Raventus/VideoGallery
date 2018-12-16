using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoGallery.PlatformModel.Abstract
{
    /// <summary>
    /// Интерфейс для плафтормы, по которой осуществляется поиск
    /// </summary>
    public interface IFilmPlatform
    {
        IQueryModel CreateQueryResponseByFilmName(string FilmName, string page);
        IQueryModel CreateQueryResponseByUd(string ID);
    }
}
