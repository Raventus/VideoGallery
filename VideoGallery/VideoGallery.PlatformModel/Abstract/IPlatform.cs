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
    public interface IPlatform
    {
        IQueryModel CreateQueryResponseByFilmName(string FilmName);
    }
}
