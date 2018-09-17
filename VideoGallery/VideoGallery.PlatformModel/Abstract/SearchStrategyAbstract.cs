using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoGallery.PlatformModel.Abstract
{
    public abstract class SearchStrategyAbstract
    {
        public abstract IEnumerable<IFilmModel> SearchFilmsByStringQuery(IQuerySearchFilmBuilder searchBuilder);
    }
}
