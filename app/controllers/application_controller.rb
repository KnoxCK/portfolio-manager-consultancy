class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!

  def download_brochure
    send_file "#{Rails.root}/app/assets/PMCL_LandingPage.pdf", type: "application/pdf", x_sendfile: true
  end
end
