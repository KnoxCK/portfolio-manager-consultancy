class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :whatwedo, :terms]

  def home
    @what_we_do = WhatWeDo.all
    @team_members = Team.all
    @news = News.all.reverse
  end

  def whatwedo
    @what_we_do = WhatWeDo.all
    @news = News.all.reverse
  end

  def terms
  end
end
