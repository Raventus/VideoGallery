using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using VideoGallery.PlatformModel.Abstract;
using VideoGallery.PlatformModel.QueryBuilderConcrete;

namespace VideoGallery.WebAPI.Tests.PlatformModel.UnitTests
{
    [TestClass]
    public class CheckIMDB_Builder
    {
        [TestMethod]
        public void Check_Builder_With_WithOpenDataBaseApiQUeryModel_Return_CorrectURl()
        {
            // Arrange
            string NameOfFilmToSearch = "Godfather";
            string outputCheckString = @"http://www.omdbapi.com:80/?s=" + NameOfFilmToSearch  + @"&apikey=dc74c032";
            IBuilder_FilmSearchQuery builder = new Builder_QuerySearch_IMDB_With_OpenDataBaseApi();

            // Act
            builder.BuildNameOfFilm(NameOfFilmToSearch);
            var QuerySting = builder.GetQueryObject();

            // Assert
            Assert.AreEqual(QuerySting.FullQueryString, outputCheckString);
        }
    }
}
