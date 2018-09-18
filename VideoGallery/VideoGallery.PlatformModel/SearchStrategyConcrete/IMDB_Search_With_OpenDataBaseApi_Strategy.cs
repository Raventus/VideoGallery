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
       /// Построение строки запроса, используя название фильма и год создания
       /// </summary>
       /// <param name="name">Название фильма </param>
       /// <param name="year">Год создания</param>
       /// <returns></returns>
        public override IQueryModel ConstructQuerySearchByNameAndYear(string name, string year)
        {
            _builder.ClearQueryObject();           
            _builder.BuildNameOfFilm(name);
            _builder.BuildYearOfFoundation(year);
            return _builder.GetQueryObject();
        }

        /// <summary>
        /// Построение строки запроса, используя название фильма
        /// </summary>
        /// <param name="name">Название фильма</param>
        /// <returns></returns>
        public override IQueryModel ConstructQuerySearchByFilmName(string name)
        {
            _builder.ClearQueryObject();
            _builder.BuildNameOfFilm(name);
            return _builder.GetQueryObject();
        }
    }
}
