using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoGallery.PlatformModel.Abstract
{
    /// <summary>
    /// Стретегия поиска для платформы
    /// </summary>
    public abstract class Strategy_SearchAbstract
    {

        public abstract IQueryModel ConstructQuerySearchByFilmName(string filmname);
        public abstract IQueryModel ConstructQuerySearchByNameAndYear(string name, string year);

    }
}
