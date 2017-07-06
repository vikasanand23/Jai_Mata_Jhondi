(function() {
    function homeFunc($scope) {
		$scope.imgGallery = "images/banner.jpg"
        $scope.title = "Welcome to Mata Jhondi";
        $scope.innerTxt = "Hello Guys";
        $scope.invoiceImg = "images/homeIcon1.png";
        $scope.invoiceTitle = "Jhondi Mata Temple";
        $scope.invoiceContent = "Jhondi mata, also known as Mata Rani, Trikuta and Vaishnavi, is a manifestation of the Hindu Mother Goddess Mahalakshmi. The words 'maa' and 'mata' are commonly used in India for 'mother', and thus are often used in connection with Vaishno Devi. Jhondi Mata Mandir is a Hindu temple dedicated to the Hindu Goddess, located in Lag Manwin at the Bhoranj Tehsil within the Indian state of Himachal Pradesh.";

        $scope.leaveImg = "images/homeIcon2.png";
        $scope.leaveTitle = "Shiv Shankar Temple";
        $scope.leaveContent = "Shiva is the 'destroyer and transformer' within the Trimurti, the Hindu trinity that includes Brahma and Vishnu. In Shaivism tradition, Shiva is the Supreme being who creates, protects and transforms the universe. In the goddess tradition of Hinduism called Shaktism, the goddess is described as supreme, yet Shiva is revered along with Vishnu and Brahma. A goddess is stated to be the energy and creative power (Shakti) of each, with Parvati the equal complementary partner of Shiva. He is one of the five equivalent deities in Panchayatana puja of the Smarta tradition of Hinduism.";

        $scope.loanImg = "images/homeIcon3.png";
        $scope.loanTitle = "Hanuman Temple";
        $scope.loanContent = "Hanuman is an ardent devotee of Rama. He is one of the central characters in the various versions of the epic Ramayana found in the Indian subcontinent and Southeast Asia. As one of the Chiranjivi, he is also mentioned in several other texts, such as the Mahabharata, the various Puranas and some Jain, Buddhist, and Sikh texts. Several later texts also present him as an incarnation of Shiva.Hanuman is the son of Anjana and Kesari and is also son of the wind-god Pawan, who according to several stories, played a role in his birth.";

        $scope.btnTxt = "Read More";
        $scope.btnHref = "http://www.divyanshianand.co.in/";
    }
    angular.module("app").controller("homeController", homeFunc)
}());
