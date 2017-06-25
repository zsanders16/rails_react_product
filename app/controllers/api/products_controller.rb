class Api::ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]

  def index
    render json: Product.all
  end

  def show
    render json: @product
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: product
    else
      render json: @product.errors.full_messages.join(','), status: :unprocessable_entity
    end
  end

  def update
    if @product.update(product_params[:id])
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @product.destroy
    render json: { message: 'Product deleted'}
  end

  private

    def product_params
      params.fetch(:product).permit(:name, :description, :price)
    end

    def set_product
      @product = Product.find(params[:id])
    end
end
