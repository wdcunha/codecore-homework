require './book.rb'

b = Book.new
b.title = "My book"

#b.chapters

b.add_chapter("my first chapter")
b.add_chapter("my second chapter")
b.add_chapter("my third chapter")
b.add_chapter("my forth chapter")

b.chapters
