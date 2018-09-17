using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VideoGallery.PlatformModel.Abstract
{
    public abstract class IFilmModel
    {
        public int ID { get; set; }
        public string NameOfFilm { get; set; }
        public int YearOfCreation { get; set;}
        public TypeOfFilm Type { get; set; }
        public string ShortPlot { get; set; }
        public string FullPlot { get; set; }
    }

    public enum TypeOfFilm {Movie, Series, Episode }
}
