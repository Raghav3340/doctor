import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Search, Star, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';


const Doctors = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filter, setFilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { doctors } = useContext(AppContext);

  const specializations = [
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist',
  ];

  const applyFilter = (selectedSpeciality) => {
    let filtered = doctors;
    if (selectedSpeciality) {
      filtered = filtered.filter((doc) => doc.speciality === selectedSpeciality);
    }
    if (searchTerm) {
      filtered = filtered.filter((doc) => 
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.speciality.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilter(filtered);
  };

  useEffect(() => {
    applyFilter(speciality);
  }, [doctors, speciality, searchTerm]);

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Find Your Specialist</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Specializations</CardTitle>
              <CardDescription>Filter doctors by their speciality</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {specializations.map((item, index) => (
                  <Button
                    key={index}
                    variant={speciality === item ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => applyFilter(item)}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <div className="mb-6">
            <Input
              type="text"
              placeholder="Search doctors by name or speciality..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
              icon={<Search className="mr-2 h-4 w-4" />}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filter.length > 0 ? (
              filter.map((item, index) => (
                <Card key={index} className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg" onClick={() => navigate(`/appointment/${item._id}`)}>
                  <img src={item.image} alt={item.name} className="w-full   " />
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.speciality}</p>
                      </div>
                      <Badge variant="secondary" className="ml-2">
                        Available
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-2">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      <span className="mr-3">4.8 (120 reviews)</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Next available: Today</span>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No doctors available for the selected criteria.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;