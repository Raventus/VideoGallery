using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoGallery.PlatformModel.Abstract
{
    public interface IQueryModel
    {
        string FilmName { get; set; }
        string YearOfCreation { get; set;}

        string FullQueryString { get; set; }

    }
}
