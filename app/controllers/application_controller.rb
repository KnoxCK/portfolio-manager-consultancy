class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  skip_before_action :authenticate_user!, only: [:download_brochure]

  def download_brochure
    send_file "app/assets/PortfolioManagerConsultancyBrochure.pdf", type: "application/pdf", x_sendfile: true
  end
end
