class Api::ResponsesController < ApplicationController
  def index
    @responses = Response.all
    render 'api/responses/index'
  end

  def create
    @response = Response.new(response_params)
    @response.author_id = current_user.id
    @response.story_id = params[:story_id]
    if @response.save
      render 'api/responses/show'
    else
      render json: @response.errors.full_messages, status: 422
    end
  end

  def update_claps
    @response = Response.find(params[:response_id])
    if @response.update_attribute(:count, response_params[:count])
      render 'api/responses/show'
    else
      render json: @response.errors.full_messages, status: 422
    end
  end


  def destroy
    @response = Response.find(params[:id])
    @response.destroy
    @responses = Response.all
    render 'api/responses/index'
  end

  private
  def response_params
    params.require(:response).permit(:body, :count)
  end
end