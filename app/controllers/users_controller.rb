class UsersController < ApplicationController
  def index
  	@users = User.all
  end

  def import
  	User.import(params[:file])
  	redirect_to root_url, notice: "Data Imported."
  end

  def destroy
  	@user = User.find(params[:id])
  	@user.destroy
  	redirect_to users_path
  end

end
