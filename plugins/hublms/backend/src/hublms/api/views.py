from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from baserow.contrib.database.models import Database
from baserow.contrib.database.table.models import Table
from baserow.contrib.database.fields.models import Field
import logging

logger = logging.getLogger(__name__)

class StartingView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        return Response({"title": "Starting title", "content": "Starting text"})

class ExampleView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        return Response({
            'title': 'Example title',
            'content': 'Example text'
        })
class CoursesView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        try:
            # Find the database named "hublms"
            from baserow.contrib.database.models import Database
            from baserow.contrib.database.table.models import Table
            from baserow.contrib.database.fields.models import Field
            
            try:
                logger.info("Fetching database 'hublms'")
                # List all available databases for debugging
                all_databases = Database.objects.all()
                logger.info(f"Available databases: {[db.name for db in all_databases]}")
                
                database = Database.objects.get(name="Hublms")
                logger.info(f"Found database: {database.name} (ID: {database.id})")
                
                # List all tables in the database
                all_tables = Table.objects.filter(database=database)
                logger.info(f"Available tables in '{database.name}': {[table.name for table in all_tables]}")
                
                # Find the table named "Courses" in the database
                table = Table.objects.get(database=database, name="Courses")
                logger.info(f"Found table: {table.name} (ID: {table.id})")
                
                # Get the fields in the table
                fields = Field.objects.filter(table=table)
                field_mapping = {}
                for field in fields:
                    logger.info(f"Field: {field.id} - {field.name}")
                    field_mapping[field.id] = field.name
                
                # Get the table model to query the data
                model = table.get_model()
                logger.info("Got table model")
                
                # Query all rows from the Courses table
                rows = model.objects.all()
                logger.info(f"Found {rows.count()} rows in the table")
                
                # Debug field information
                logger.info(f"Field objects: {list(model._field_objects.keys())}")
                
                # Convert the rows to a list of dictionaries
                courses = []
                for row in rows:
                    # Create a dictionary to store the course data
                    course_data = {
                        'id': row.id,
                        'Name': '',
                        'Description': '',
                        'ShortDescription': '',
                        'status': 'active'  # Default status
                    }
                    
                    # Iterate through the field objects
                    for field_id, field_object in model._field_objects.items():
                        try:
                            # Get the field name from our mapping
                            field_name = field_mapping.get(field_id, f"field_{field_id}")
                            field_value = getattr(row, f"field_{field_id}")
                            logger.info(f"Field {field_id} ({field_name}): {field_value}")
                            
                            # Map the field to the appropriate course_data field
                            if field_name.lower() == 'name':
                                course_data['Name'] = field_value
                            elif field_name.lower() == 'description':
                                course_data['Description'] = field_value
                            elif field_name.lower() == 'shortdescription':
                                course_data['ShortDescription'] = field_value
                        except Exception as field_error:
                            logger.error(f"Error processing field {field_id}: {str(field_error)}")
                    
                    logger.info(f"Processed course: {course_data}")
                    courses.append(course_data)
                
                logger.info(f"Returning {len(courses)} courses")
                return Response({
                    'title': 'Courses Management',
                    'courses': courses
                })
                
            except Database.DoesNotExist:
                logger.error("Database 'lms' not found")
                return Response({
                    'title': 'Courses Management',
                    'error': 'Database "lms" not found',
                    'courses': []
                })
            except Table.DoesNotExist:
                logger.error("Table 'Courses' not found in database 'lms'")
                return Response({
                    'title': 'Courses Management',
                    'error': 'Table "Courses" not found in database "lms"',
                    'courses': []
                })
            
        except Exception as e:
            # If there's an error, return a helpful message and the sample data
            # This ensures the UI still works even if the database connection fails
            logger.exception(f"Error fetching courses: {str(e)}")
            courses = [
                {
                    'id': 1,
                    'Name': 'Course 1',
                    'Description': '123',
                    'ShortDescription': '234',
                    'status': 'active'
                },
                {
                    'id': 2,
                    'Name': 'Course 2',
                    'Description': '2323',
                    'ShortDescription': 'asda',
                    'status': 'active'
                }
            ]
            
            return Response({
                'title': 'Courses Management',
                'error': str(e),
                'courses': courses
            })
            
    def post(self, request):
        try:
            # Get the course data from the request
            course_data = request.data
            logger.info(f"Received course data for creation: {course_data}")
            
            # Find the database named "hublms"
            try:
                database = Database.objects.get(name="Hublms")
                logger.info(f"Found database: {database.name} (ID: {database.id})")
                
                # Find the table named "Courses" in the database
                table = Table.objects.get(database=database, name="Courses")
                logger.info(f"Found table: {table.name} (ID: {table.id})")
                
                # Get the fields in the table
                fields = Field.objects.filter(table=table)
                field_mapping = {}
                field_id_mapping = {}
                for field in fields:
                    field_mapping[field.id] = field.name
                    field_id_mapping[field.name.lower()] = field.id
                    logger.info(f"Field: {field.id} - {field.name}")
                
                # Get the table model to create a new row
                model = table.get_model()
                
                # Create a new row with the course data
                new_course = model()
                
                # Map the course data to the appropriate fields
                for field_name, field_value in course_data.items():
                    if field_name.lower() in field_id_mapping:
                        field_id = field_id_mapping[field_name.lower()]
                        setattr(new_course, f"field_{field_id}", field_value)
                        logger.info(f"Setting field {field_id} ({field_name}): {field_value}")
                
                # Save the new course
                new_course.save()
                logger.info(f"Created new course with ID: {new_course.id}")
                
                # Return the created course
                return Response({
                    'success': True,
                    'message': 'Course created successfully',
                    'course_id': new_course.id
                })
                
            except Database.DoesNotExist:
                logger.error("Database 'hublms' not found")
                return Response({
                    'success': False,
                    'error': 'Database "hublms" not found'
                }, status=400)
            except Table.DoesNotExist:
                logger.error("Table 'Courses' not found in database 'hublms'")
                return Response({
                    'success': False,
                    'error': 'Table "Courses" not found in database "hublms"'
                }, status=400)
            
        except Exception as e:
            logger.exception(f"Error creating course: {str(e)}")
            return Response({
                'success': False,
                'error': str(e)
            }, status=500)
    
    def put(self, request):
        try:
            # Get the course data from the request
            course_data = request.data
            course_id = course_data.get('id')
            
            if not course_id:
                return Response({
                    'success': False,
                    'error': 'Course ID is required for updates'
                }, status=400)
            
            logger.info(f"Received course data for update: {course_data}")
            
            # Find the database named "hublms"
            try:
                database = Database.objects.get(name="Hublms")
                logger.info(f"Found database: {database.name} (ID: {database.id})")
                
                # Find the table named "Courses" in the database
                table = Table.objects.get(database=database, name="Courses")
                logger.info(f"Found table: {table.name} (ID: {table.id})")
                
                # Get the fields in the table
                fields = Field.objects.filter(table=table)
                field_mapping = {}
                field_id_mapping = {}
                for field in fields:
                    field_mapping[field.id] = field.name
                    field_id_mapping[field.name.lower()] = field.id
                    logger.info(f"Field: {field.id} - {field.name}")
                
                # Get the table model to update a row
                model = table.get_model()
                
                # Find the course to update
                try:
                    course = model.objects.get(id=course_id)
                    logger.info(f"Found course to update: {course.id}")
                    
                    # Update the course fields
                    for field_name, field_value in course_data.items():
                        if field_name.lower() in field_id_mapping and field_name.lower() != 'id':
                            field_id = field_id_mapping[field_name.lower()]
                            setattr(course, f"field_{field_id}", field_value)
                            logger.info(f"Updating field {field_id} ({field_name}): {field_value}")
                    
                    # Save the updated course
                    course.save()
                    logger.info(f"Updated course with ID: {course.id}")
                    
                    # Return the updated course
                    return Response({
                        'success': True,
                        'message': 'Course updated successfully',
                        'course_id': course.id
                    })
                    
                except model.DoesNotExist:
                    logger.error(f"Course with ID {course_id} not found")
                    return Response({
                        'success': False,
                        'error': f'Course with ID {course_id} not found'
                    }, status=404)
                
            except Database.DoesNotExist:
                logger.error("Database 'hublms' not found")
                return Response({
                    'success': False,
                    'error': 'Database "hublms" not found'
                }, status=400)
            except Table.DoesNotExist:
                logger.error("Table 'Courses' not found in database 'hublms'")
                return Response({
                    'success': False,
                    'error': 'Table "Courses" not found in database "hublms"'
                }, status=400)
            
        except Exception as e:
            logger.exception(f"Error updating course: {str(e)}")
            return Response({
                'success': False,
                'error': str(e)
            }, status=500)
