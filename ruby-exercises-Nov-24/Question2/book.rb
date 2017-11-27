# Build a Ruby class called Book. Objects of the Book class must have two attributes: title and chapters. Objects
# must have two methods: add_chapter and chapters. The add_chapter method adds a chapter by giving it a title.
# The chapters method should display the number of chapters and lists all the chapters as in:

#*there's no use for attribute chapter....what to do with it if chapter is added and not informed???  and there's
# no field for book to be printed as in the sample given, but says to give it a title, that I understand the same
# title class attribute

class Book

    attr_accessor :title
  # attr_accessor :book_name
  # attr_accessor :chapter

  def initialize
    @title, @chapter = title, []

    p 'Your book was opened!'

  end

  def add_chapter(chapter)
    @chapter << chapter
  end

  def chapters
    p "The book '#{@title}' has #{@chapter.length} chapters, as listed below:" #how put " " interpolated?

    @chapter.each_with_index do |ch, i|
      p "#{i+1}. #{ch}"
    end

  end

end
