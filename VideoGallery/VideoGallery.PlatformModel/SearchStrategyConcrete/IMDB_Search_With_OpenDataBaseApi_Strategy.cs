using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VideoGallery.PlatformModel.Abstract;

namespace VideoGallery.PlatformModel.SearchStrategyConcrete
{
    /// <summary>
    /// Стратегия поиска фильмов на платформе IMDB используя OpenDataBaseApi
    /// </summary>
    public class IMDB_Search_With_OpenDataBaseApi_Strategy : SearchStrategyAbstract
    {
        IQuerySearchFilmBuilder _builder;
        /// <summary>
        /// Конструктор стратегии поиска 
        /// </summary>
        /// <param name="builder">Строитель объекта для запроса</param>
        public IMDB_Search_With_OpenDataBaseApi_Strategy(IQuerySearchFilmBuilder builder)
        {
            this._builder = builder;
        }

        public void ChangeBuilder(IQuerySearchFilmBuilder builder)
        {
            this._builder = builder;
        }

        /// <summary>
        /// Построение объекта запроса по названию фильма и году выпуска
        /// </summary>
        public IQueryModel ConstructQuerySearchByNameAndYear(string name, string year)
        {
            _builder.ClearQueryObject();           
            _builder.BuildNameOfFilm(name);
            _builder.BuildYearOfFoundation(year);
            return _builder.GetQueryObject();
        }


        public override IEnumerable<IFilmModel> SearchFilmsByStringQuery(IQuerySearchFilmBuilder searchBuilder)
        {
            throw new NotImplementedException();
        }
    }
}
