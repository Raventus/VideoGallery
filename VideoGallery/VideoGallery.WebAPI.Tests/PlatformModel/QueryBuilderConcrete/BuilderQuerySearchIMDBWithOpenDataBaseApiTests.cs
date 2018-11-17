using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using VideoGallery.PlatformModel.Abstract;
using VideoGallery.PlatformModel.QueryBuilderConcrete;

namespace VideoGallery.WebAPI.Tests.PlatformModel.QueryBuilderConcrete
{
    [TestClass]
    public class Builder_QuerySearch_IMDB_With_OpenDataBaseApiTests
    {
        [TestMethod]
        public void BuildNameOfFilm_WithGodfatherParameters_ReturnCorrectURl()
        {
            // Arrange
            string NameOfFilmToSearch = "Godfather";
            string outputCheckString = @"http://www.omdbapi.com:80/?s=" + NameOfFilmToSearch  + @"&apikey=dc74c032";
            IBuilder_FilmSearchQuery builder = new BuilderQuerySearchIMDBWithOpenDataBaseApi();

            // Act
            builder.BuildNameOfFilm(NameOfFilmToSearch);
            var QuerySting = builder.GetQueryObject();

            // Assert
            Assert.AreEqual(QuerySting.FullQueryString, outputCheckString);
        }
    }
}
