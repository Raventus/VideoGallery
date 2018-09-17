using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoGallery.PlatformModel.Abstract
{
    public interface IPlatform
    {
        IEnumerable<IFilmModel> Search(IQuerySearchFilmBuilder queryBuilder);
    }
}
