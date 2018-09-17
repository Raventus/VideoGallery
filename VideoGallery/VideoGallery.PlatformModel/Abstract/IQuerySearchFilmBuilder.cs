using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoGallery.PlatformModel.Abstract
{
    public interface IQuerySearchFilmBuilder 
    {
        void ClearQueryObject();
        void BuildNameOfFilm(string nameOfFilm);
        void BuildYearOfFoundation(string yearOfFilm);
        IQueryModel GetQueryObject();

    }
}
